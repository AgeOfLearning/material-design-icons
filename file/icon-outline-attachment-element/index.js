import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAttachmentElement
 * @class IconOutlineAttachmentElement
 * @extends {AoflElement}
 */
class IconOutlineAttachmentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAttachmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-attachment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAttachmentElement.is, IconOutlineAttachmentElement);

export default IconOutlineAttachmentElement;
