import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGroupElement
 * @class IconBaselineGroupElement
 * @extends {AoflElement}
 */
class IconBaselineGroupElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGroupElement.is, IconBaselineGroupElement);

export default IconBaselineGroupElement;
