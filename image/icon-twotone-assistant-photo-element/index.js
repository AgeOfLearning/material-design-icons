import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssistantPhotoElement
 * @class IconTwotoneAssistantPhotoElement
 * @extends {AoflElement}
 */
class IconTwotoneAssistantPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssistantPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assistant-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssistantPhotoElement.is, IconTwotoneAssistantPhotoElement);

export default IconTwotoneAssistantPhotoElement;
