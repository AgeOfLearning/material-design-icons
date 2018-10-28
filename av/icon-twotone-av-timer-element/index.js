import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAvTimerElement
 * @class IconTwotoneAvTimerElement
 * @extends {AoflElement}
 */
class IconTwotoneAvTimerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAvTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-av-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAvTimerElement.is, IconTwotoneAvTimerElement);

export default IconTwotoneAvTimerElement;
