import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssistantPhotoElement
 * @class IconOutlineAssistantPhotoElement
 * @extends {AoflElement}
 */
class IconOutlineAssistantPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssistantPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assistant-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssistantPhotoElement.is, IconOutlineAssistantPhotoElement);

export default IconOutlineAssistantPhotoElement;
