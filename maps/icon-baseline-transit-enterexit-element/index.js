import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTransitEnterexitElement
 * @class IconBaselineTransitEnterexitElement
 * @extends {AoflElement}
 */
class IconBaselineTransitEnterexitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTransitEnterexitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-transit-enterexit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTransitEnterexitElement.is, IconBaselineTransitEnterexitElement);

export default IconBaselineTransitEnterexitElement;
