import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExploreOffElement
 * @class IconRoundExploreOffElement
 * @extends {AoflElement}
 */
class IconRoundExploreOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExploreOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-explore-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExploreOffElement.is, IconRoundExploreOffElement);

export default IconRoundExploreOffElement;
