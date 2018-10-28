import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStopElement
 * @class IconTwotoneStopElement
 * @extends {AoflElement}
 */
class IconTwotoneStopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStopElement.is, IconTwotoneStopElement);

export default IconTwotoneStopElement;
