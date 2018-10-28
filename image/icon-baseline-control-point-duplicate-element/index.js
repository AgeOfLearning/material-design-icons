import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineControlPointDuplicateElement
 * @class IconBaselineControlPointDuplicateElement
 * @extends {AoflElement}
 */
class IconBaselineControlPointDuplicateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineControlPointDuplicateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-control-point-duplicate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineControlPointDuplicateElement.is, IconBaselineControlPointDuplicateElement);

export default IconBaselineControlPointDuplicateElement;
