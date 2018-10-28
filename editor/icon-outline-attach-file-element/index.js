import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAttachFileElement
 * @class IconOutlineAttachFileElement
 * @extends {AoflElement}
 */
class IconOutlineAttachFileElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAttachFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-attach-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAttachFileElement.is, IconOutlineAttachFileElement);

export default IconOutlineAttachFileElement;
