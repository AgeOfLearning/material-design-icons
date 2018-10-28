import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirplayElement
 * @class IconBaselineAirplayElement
 * @extends {AoflElement}
 */
class IconBaselineAirplayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airplay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirplayElement.is, IconBaselineAirplayElement);

export default IconBaselineAirplayElement;
