import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeleteElement
 * @class IconBaselineDeleteElement
 * @extends {AoflElement}
 */
class IconBaselineDeleteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeleteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-delete';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeleteElement.is, IconBaselineDeleteElement);

export default IconBaselineDeleteElement;
