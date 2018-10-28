import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCheckCircleOutlineElement
 * @class IconBaselineCheckCircleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineCheckCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCheckCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-check-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCheckCircleOutlineElement.is, IconBaselineCheckCircleOutlineElement);

export default IconBaselineCheckCircleOutlineElement;
