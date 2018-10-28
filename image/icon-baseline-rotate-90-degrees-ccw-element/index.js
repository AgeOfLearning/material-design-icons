import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRotate90DegreesCcwElement
 * @class IconBaselineRotate90DegreesCcwElement
 * @extends {AoflElement}
 */
class IconBaselineRotate90DegreesCcwElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRotate90DegreesCcwElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rotate-90-degrees-ccw';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRotate90DegreesCcwElement.is, IconBaselineRotate90DegreesCcwElement);

export default IconBaselineRotate90DegreesCcwElement;
