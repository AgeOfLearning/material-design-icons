import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalSeeElement
 * @class IconRoundLocalSeeElement
 * @extends {AoflElement}
 */
class IconRoundLocalSeeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalSeeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-see';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalSeeElement.is, IconRoundLocalSeeElement);

export default IconRoundLocalSeeElement;
