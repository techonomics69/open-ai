import { Component, OnInit } from '@angular/core';
import { OpenAiService } from 'src/app/core/services/open-ai.service';
import { OpenAIRequestBody } from '@common-models';
import { INITIAL_TEXTAREA_CONTENT } from 'src/app/models/app-constants';
import { OpenAiResponseBody } from 'src/app/models/app-models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public textAreaContent: string = '';

  constructor(private openAi: OpenAiService) { }

  ngOnInit(): void {
    this.initTextArea();
  }

  private initTextArea(): void {
    this.textAreaContent = INITIAL_TEXTAREA_CONTENT;
  }

  public submit(e: MouseEvent): void {
    const body: OpenAIRequestBody = {
      prompt: this.textAreaContent,
      stop: [' You:', ' AI:']
    };

    this.openAi.submitConversation(body).subscribe({
      next: (res: OpenAiResponseBody) => {
        const aiResponse: string = res.choices[0].text.trim();
        //this.textAreaContent += ` \n${aiResponse.trim().startsWith('AI') ? ' ' : ' AI: '}` + aiResponse + ' \n Human: ';
        this.textAreaContent += `\n ${aiResponse}\n\n You: `;
      } 
    });
  }

  public reset(e: MouseEvent): void {
    this.initTextArea();
  }

}
