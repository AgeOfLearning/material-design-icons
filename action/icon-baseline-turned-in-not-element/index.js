import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTurnedInNotElement
 * @class IconBaselineTurnedInNotElement
 * @extends {AoflElement}
 */
class IconBaselineTurnedInNotElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTurnedInNotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-turned-in-not';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTurnedInNotElement.is, IconBaselineTurnedInNotElement);

export default IconBaselineTurnedInNotElement;
