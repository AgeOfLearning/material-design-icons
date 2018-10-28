import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideocamElement
 * @class IconTwotoneVideocamElement
 * @extends {AoflElement}
 */
class IconTwotoneVideocamElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideocamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-videocam';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideocamElement.is, IconTwotoneVideocamElement);

export default IconTwotoneVideocamElement;
