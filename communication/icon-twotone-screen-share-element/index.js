import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScreenShareElement
 * @class IconTwotoneScreenShareElement
 * @extends {AoflElement}
 */
class IconTwotoneScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScreenShareElement.is, IconTwotoneScreenShareElement);

export default IconTwotoneScreenShareElement;
