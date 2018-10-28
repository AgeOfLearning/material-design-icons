import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTurnedInElement
 * @class IconBaselineTurnedInElement
 * @extends {AoflElement}
 */
class IconBaselineTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTurnedInElement.is, IconBaselineTurnedInElement);

export default IconBaselineTurnedInElement;
