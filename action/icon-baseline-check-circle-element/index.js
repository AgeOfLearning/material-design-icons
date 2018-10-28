import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCheckCircleElement
 * @class IconBaselineCheckCircleElement
 * @extends {AoflElement}
 */
class IconBaselineCheckCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCheckCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-check-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCheckCircleElement.is, IconBaselineCheckCircleElement);

export default IconBaselineCheckCircleElement;
