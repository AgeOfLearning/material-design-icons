import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonOutlineElement
 * @class IconBaselinePersonOutlineElement
 * @extends {AoflElement}
 */
class IconBaselinePersonOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonOutlineElement.is, IconBaselinePersonOutlineElement);

export default IconBaselinePersonOutlineElement;
