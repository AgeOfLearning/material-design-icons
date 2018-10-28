import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCreateElement
 * @class IconBaselineCreateElement
 * @extends {AoflElement}
 */
class IconBaselineCreateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCreateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-create';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCreateElement.is, IconBaselineCreateElement);

export default IconBaselineCreateElement;
