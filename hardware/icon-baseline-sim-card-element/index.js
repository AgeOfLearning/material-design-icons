import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSimCardElement
 * @class IconBaselineSimCardElement
 * @extends {AoflElement}
 */
class IconBaselineSimCardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSimCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sim-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSimCardElement.is, IconBaselineSimCardElement);

export default IconBaselineSimCardElement;
