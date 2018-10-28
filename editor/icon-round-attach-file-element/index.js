import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAttachFileElement
 * @class IconRoundAttachFileElement
 * @extends {AoflElement}
 */
class IconRoundAttachFileElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAttachFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-attach-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAttachFileElement.is, IconRoundAttachFileElement);

export default IconRoundAttachFileElement;
