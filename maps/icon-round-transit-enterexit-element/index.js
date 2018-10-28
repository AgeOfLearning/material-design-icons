import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTransitEnterexitElement
 * @class IconRoundTransitEnterexitElement
 * @extends {AoflElement}
 */
class IconRoundTransitEnterexitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTransitEnterexitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-transit-enterexit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTransitEnterexitElement.is, IconRoundTransitEnterexitElement);

export default IconRoundTransitEnterexitElement;
