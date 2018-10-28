import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideoCallElement
 * @class IconTwotoneVideoCallElement
 * @extends {AoflElement}
 */
class IconTwotoneVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideoCallElement.is, IconTwotoneVideoCallElement);

export default IconTwotoneVideoCallElement;
