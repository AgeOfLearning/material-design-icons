import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExplicitElement
 * @class IconTwotoneExplicitElement
 * @extends {AoflElement}
 */
class IconTwotoneExplicitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExplicitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-explicit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExplicitElement.is, IconTwotoneExplicitElement);

export default IconTwotoneExplicitElement;
