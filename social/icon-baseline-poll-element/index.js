import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePollElement
 * @class IconBaselinePollElement
 * @extends {AoflElement}
 */
class IconBaselinePollElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-poll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePollElement.is, IconBaselinePollElement);

export default IconBaselinePollElement;
