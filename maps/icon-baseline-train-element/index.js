import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrainElement
 * @class IconBaselineTrainElement
 * @extends {AoflElement}
 */
class IconBaselineTrainElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-train';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrainElement.is, IconBaselineTrainElement);

export default IconBaselineTrainElement;
