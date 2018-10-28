import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAttachmentElement
 * @class IconSharpAttachmentElement
 * @extends {AoflElement}
 */
class IconSharpAttachmentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAttachmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-attachment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAttachmentElement.is, IconSharpAttachmentElement);

export default IconSharpAttachmentElement;
