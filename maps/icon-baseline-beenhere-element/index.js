import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBeenhereElement
 * @class IconBaselineBeenhereElement
 * @extends {AoflElement}
 */
class IconBaselineBeenhereElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBeenhereElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-beenhere';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBeenhereElement.is, IconBaselineBeenhereElement);

export default IconBaselineBeenhereElement;
