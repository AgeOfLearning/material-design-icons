import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEditLocationElement
 * @class IconRoundEditLocationElement
 * @extends {AoflElement}
 */
class IconRoundEditLocationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEditLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-edit-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEditLocationElement.is, IconRoundEditLocationElement);

export default IconRoundEditLocationElement;
