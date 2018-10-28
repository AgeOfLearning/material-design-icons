import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEditElement
 * @class IconBaselineEditElement
 * @extends {AoflElement}
 */
class IconBaselineEditElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEditElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-edit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEditElement.is, IconBaselineEditElement);

export default IconBaselineEditElement;
