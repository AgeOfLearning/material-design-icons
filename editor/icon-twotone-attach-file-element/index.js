import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAttachFileElement
 * @class IconTwotoneAttachFileElement
 * @extends {AoflElement}
 */
class IconTwotoneAttachFileElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAttachFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-attach-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAttachFileElement.is, IconTwotoneAttachFileElement);

export default IconTwotoneAttachFileElement;
