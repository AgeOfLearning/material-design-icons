import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssistantPhotoElement
 * @class IconSharpAssistantPhotoElement
 * @extends {AoflElement}
 */
class IconSharpAssistantPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssistantPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assistant-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssistantPhotoElement.is, IconSharpAssistantPhotoElement);

export default IconSharpAssistantPhotoElement;
