import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssistantPhotoElement
 * @class IconRoundAssistantPhotoElement
 * @extends {AoflElement}
 */
class IconRoundAssistantPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssistantPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assistant-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssistantPhotoElement.is, IconRoundAssistantPhotoElement);

export default IconRoundAssistantPhotoElement;
