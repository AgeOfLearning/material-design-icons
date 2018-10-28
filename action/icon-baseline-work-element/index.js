import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWorkElement
 * @class IconBaselineWorkElement
 * @extends {AoflElement}
 */
class IconBaselineWorkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWorkElement.is, IconBaselineWorkElement);

export default IconBaselineWorkElement;
