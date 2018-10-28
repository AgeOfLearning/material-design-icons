import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideocamOffElement
 * @class IconTwotoneVideocamOffElement
 * @extends {AoflElement}
 */
class IconTwotoneVideocamOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideocamOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-videocam-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideocamOffElement.is, IconTwotoneVideocamOffElement);

export default IconTwotoneVideocamOffElement;
