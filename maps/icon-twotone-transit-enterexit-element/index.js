import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTransitEnterexitElement
 * @class IconTwotoneTransitEnterexitElement
 * @extends {AoflElement}
 */
class IconTwotoneTransitEnterexitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTransitEnterexitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-transit-enterexit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTransitEnterexitElement.is, IconTwotoneTransitEnterexitElement);

export default IconTwotoneTransitEnterexitElement;
