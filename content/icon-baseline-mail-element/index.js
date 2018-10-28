import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMailElement
 * @class IconBaselineMailElement
 * @extends {AoflElement}
 */
class IconBaselineMailElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMailElement.is, IconBaselineMailElement);

export default IconBaselineMailElement;
