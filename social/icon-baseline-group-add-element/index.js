import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGroupAddElement
 * @class IconBaselineGroupAddElement
 * @extends {AoflElement}
 */
class IconBaselineGroupAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGroupAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-group-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGroupAddElement.is, IconBaselineGroupAddElement);

export default IconBaselineGroupAddElement;
