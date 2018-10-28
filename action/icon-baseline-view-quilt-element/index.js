import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewQuiltElement
 * @class IconBaselineViewQuiltElement
 * @extends {AoflElement}
 */
class IconBaselineViewQuiltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewQuiltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-quilt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewQuiltElement.is, IconBaselineViewQuiltElement);

export default IconBaselineViewQuiltElement;
