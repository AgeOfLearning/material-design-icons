import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPlayElement
 * @class IconTwotoneLocalPlayElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPlayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPlayElement.is, IconTwotoneLocalPlayElement);

export default IconTwotoneLocalPlayElement;
