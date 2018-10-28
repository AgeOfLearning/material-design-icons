import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTransitEnterexitElement
 * @class IconOutlineTransitEnterexitElement
 * @extends {AoflElement}
 */
class IconOutlineTransitEnterexitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTransitEnterexitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-transit-enterexit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTransitEnterexitElement.is, IconOutlineTransitEnterexitElement);

export default IconOutlineTransitEnterexitElement;
