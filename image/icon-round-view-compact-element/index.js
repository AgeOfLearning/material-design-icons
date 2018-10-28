import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewCompactElement
 * @class IconRoundViewCompactElement
 * @extends {AoflElement}
 */
class IconRoundViewCompactElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewCompactElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-compact';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewCompactElement.is, IconRoundViewCompactElement);

export default IconRoundViewCompactElement;
