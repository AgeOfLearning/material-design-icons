import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTransitEnterexitElement
 * @class IconSharpTransitEnterexitElement
 * @extends {AoflElement}
 */
class IconSharpTransitEnterexitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTransitEnterexitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-transit-enterexit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTransitEnterexitElement.is, IconSharpTransitEnterexitElement);

export default IconSharpTransitEnterexitElement;
