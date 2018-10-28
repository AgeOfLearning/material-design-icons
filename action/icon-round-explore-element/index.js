import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExploreElement
 * @class IconRoundExploreElement
 * @extends {AoflElement}
 */
class IconRoundExploreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExploreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-explore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExploreElement.is, IconRoundExploreElement);

export default IconRoundExploreElement;
