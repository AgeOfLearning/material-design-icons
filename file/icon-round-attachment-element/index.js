import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAttachmentElement
 * @class IconRoundAttachmentElement
 * @extends {AoflElement}
 */
class IconRoundAttachmentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAttachmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-attachment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAttachmentElement.is, IconRoundAttachmentElement);

export default IconRoundAttachmentElement;
