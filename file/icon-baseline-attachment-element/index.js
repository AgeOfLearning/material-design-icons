import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAttachmentElement
 * @class IconBaselineAttachmentElement
 * @extends {AoflElement}
 */
class IconBaselineAttachmentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAttachmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-attachment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAttachmentElement.is, IconBaselineAttachmentElement);

export default IconBaselineAttachmentElement;
