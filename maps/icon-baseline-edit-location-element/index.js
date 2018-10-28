import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEditLocationElement
 * @class IconBaselineEditLocationElement
 * @extends {AoflElement}
 */
class IconBaselineEditLocationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEditLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-edit-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEditLocationElement.is, IconBaselineEditLocationElement);

export default IconBaselineEditLocationElement;
