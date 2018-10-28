import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWorkOutlineElement
 * @class IconBaselineWorkOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineWorkOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWorkOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-work-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWorkOutlineElement.is, IconBaselineWorkOutlineElement);

export default IconBaselineWorkOutlineElement;
