import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAttachmentElement
 * @class IconTwotoneAttachmentElement
 * @extends {AoflElement}
 */
class IconTwotoneAttachmentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAttachmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-attachment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAttachmentElement.is, IconTwotoneAttachmentElement);

export default IconTwotoneAttachmentElement;
